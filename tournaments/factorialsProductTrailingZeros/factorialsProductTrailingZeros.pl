#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub factorialsProductTrailingZeros {
    my ($l, $r) = @_;

    my $result = 0;
    my $index = 0;

    for (my $i = 1; $r >= $i; ++$i) {
        my $temp = $i;

        until ($temp % 5) {
            $temp /= 5;
            ++$index;
        }
        if ($l <= $i) {
            $result += $index;
        }
    }

    return $result;
}
