#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isSumOfConsecutive {
    my ($n) = @_;

    for (my $i = 1; $n > $i; ++$i) {
        my $c = $n;
        my $d = $i;

        while (0 < $c) {
            $c -= $d++;
        }

        unless ($c) {
            return 1;
        }
    }

    return 0;
}
