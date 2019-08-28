#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isSumOfConsecutive {
    my ($n) = @_;

    for (my $i = 1; $n > $i; ++$i) {
        my $x = $n;
        my $y = $i;

        while (0 < $x) {
            $x -= $y++;
        }

        unless ($x) {
            return 1;
        }
    }

    return 0;
}
