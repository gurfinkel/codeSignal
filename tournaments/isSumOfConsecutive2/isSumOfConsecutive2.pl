#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isSumOfConsecutive2 {
    my ($n) = @_;

    my $result = 0;

    for (my $i = 1; $n > $i; ++$i) {
        my $first = 0;
        my $second = $i;

        while ($n > $first) {
            $first += $second++;
        }

        if ($n == $first) {
            ++$result;
        }
    }

    return $result;
}
