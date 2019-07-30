#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub longestDigitsPrefix {
    my ($inputString) = @_;

    return substr("".("0" + ("9".$inputString)), 1);
}
